import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import { getTotalSum } from "./utils/getTotalSum";

function App() {
  const [data, setData] = useState({ incomes: [], expenses: [] });

  const handleChangeData = (newData) => {
    setData(newData);
  };

  const handleEditItem = (id, newData, type) => {
    if (type === "INCOMES") {
      const updatedIncomes = data.incomes.map((income) =>
        income.id === id ? newData : income
      );
      setData((prevState) => ({
        ...prevState,
        incomes: updatedIncomes,
      }));
      return;
    }

    if (type === "EXPENSES") {
      const updatedExpenses = data.expenses.map((expense) =>
        expense.id === id ? newData : expense
      );
      setData((prevState) => ({
        ...prevState,
        expenses: updatedExpenses,
      }));
    }
  };

  const handleDeleteItem = (id) => {
    const updatedIncomes = data.incomes.filter((item) => item.id !== id);
    const updatedExpenses = data.expenses.filter((item) => item.id !== id);
    setData((prevState) => ({
      ...prevState,
      incomes: updatedIncomes,
      expenses: updatedExpenses,
    }));
  };

  const incomesSum = getTotalSum(data.incomes);
  const expensesSum = getTotalSum(data.expenses);

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
              onEdit={(id, newData) => handleEditItem(id, newData, "INCOMES")}
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
              onEdit={(id, newData) => handleEditItem(id, newData, "EXPENSES")}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
