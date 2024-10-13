const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense'); 

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Expense.findByIdAndDelete(id);  // Delete the expense by ID
      res.json({ message: 'Expense deleted' });
    } catch (error) {
      console.error('Error deleting expense:', error);
      res.status(500).json({ message: 'Error deleting expense' });
    }
  });
  
  
  router.post('/', async (req, res) => {
    const { name, category, amount } = req.body;
  
    const newExpense = new Expense({
      name,
      category,
      amount,
    });
  
    try {
      const savedExpense = await newExpense.save();
      res.json(savedExpense);
    } catch (error) {
      res.status(500).json({ message: 'Error adding expense' });
    }
  });
  

module.exports = router;
