import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";

function App() {
  const [data, setData] = useState({ incomes: [], expenses: [] });

  const handleChangeData = (newData) => {
    setData(newData);
  };

  // const handleEditItem = (id) => {
  //   const selectedIncome = data.incomes.find((income) => income.id === id);
  //   const selectedExpense = data.expenses.find((expense) => expense.id === id);

  //   if (selectedIncome) {
  //     console.log("Found in incomes:");
  //     console.log(selectedIncome);
  //   } else if (selectedExpense) {
  //     console.log("Found in expenses:");
  //     console.log(selectedExpense);
  //   } else {
  //     console.log("Item not found.");
  //   }
  // };
  const handleEditItem = (id, newData) => {
    const updatedIncomes = data.incomes.map((income) =>
      income.id === id ? newData : income
    );
    const updatedExpenses = data.expenses.map((expense) =>
      expense.id === id ? newData : expense
    );
    setData({ ...data, incomes: updatedIncomes, expenses: updatedExpenses });
  };

  const handleDeleteItem = (id) => {
    const updatedIncomes = data.incomes.filter((item) => item.id !== id);
    const updatedExpenses = data.expenses.filter((item) => item.id !== id);
    setData({ ...data, incomes: updatedIncomes, expenses: updatedExpenses });
  };

  const incomesSum = data.incomes.reduce(
    (acc, item) => acc + Number(item.value),
    0
  );
  const expensesSum = data.expenses.reduce(
    (acc, item) => acc + Number(item.value),
    0
  );

  const totalSum = incomesSum - expensesSum;

  return (
    <>
      <Header sum={totalSum} />
      <main className="container">
        <div>
          <Form
            formType={"INCOMES"}
            data={data}
            setData={handleChangeData}
            onDelete={handleDeleteItem}
          />
          {data.incomes.length > 0 && (
            <List
              data={data.incomes}
              onDelete={handleDeleteItem}
              setData={setData}
              onEdit={handleEditItem}
            />
          )}
        </div>
        <div>
          <Form
            formType={"EXPENSES"}
            data={data}
            setData={handleChangeData}
            onDelete={handleDeleteItem}
          />
          {data.expenses.length > 0 && (
            <List
              data={data.expenses}
              onDelete={handleDeleteItem}
              setData={setData}
              onEdit={handleEditItem}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
