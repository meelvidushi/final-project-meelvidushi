import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Charts from './Charts';
import { useNavigate } from 'react-router-dom';

interface Expense {
  _id: string;
  name: string;
  amount: number;
  category: string;
}

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [chartData, setChartData] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }

      try {
        const response = await axios.get('/api/expenses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(response.data);
        calculateChartData(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
        navigate('/');
      }
    };

    fetchExpenses();
  }, [navigate]);

  const calculateChartData = (expenses: Expense[]) => {
    const data: { [key: string]: number } = {};
    expenses.forEach((expense) => {
      if (data[expense.category]) {
        data[expense.category] += expense.amount;
      } else {
        data[expense.category] = expense.amount;
      }
    });
    setChartData(data);
  };

  const addExpense = async (newExpense: { name: string; amount: number; category: string }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/expenses', newExpense, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedExpenses = [...expenses, response.data];
      setExpenses(updatedExpenses);
      calculateChartData(updatedExpenses);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const deleteExpense = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/api/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedExpenses = expenses.filter((expense) => expense._id !== id);
      setExpenses(updatedExpenses);
      calculateChartData(updatedExpenses);
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="dashboard-container p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Personal Finance Dashboard</h1>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <ExpenseForm onAddExpense={addExpense} />
      </div>

      <div className="mb-6">
        <ExpenseList expenses={expenses} handleDelete={deleteExpense} />
      </div>

      <div className="mb-6">
        <Charts data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
