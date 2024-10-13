import React from 'react';

interface Expense {
  _id: string;
  name: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  handleDelete: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, handleDelete }) => {
  // Group expenses by category
  const groupedExpenses = expenses.reduce((grouped: { [key: string]: Expense[] }, expense) => {
    if (!grouped[expense.category]) {
      grouped[expense.category] = [];
    }
    grouped[expense.category].push(expense);
    return grouped;
  }, {});

  return (
    <div className="expense-list">
      <h2 className="text-xl font-semibold mb-4">Expense List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Expense Name</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedExpenses).map((category) =>
              groupedExpenses[category].map((expense, index) => (
                <tr key={expense._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4">{expense.category}</td>
                  <td className="py-2 px-4">{expense.name}</td>
                  <td className="py-2 px-4">${expense.amount}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                      onClick={() => handleDelete(expense._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
