import { getRandomId } from "../../utils/getRandomId";
import styles from "./Form.module.css";

const Form = ({ formType, data, setData }) => {
  const isIncomesForm = formType === "INCOMES";

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = isIncomesForm
      ? event.target.incomeName.value
      : event.target.expenseName.value;
    const value = isIncomesForm
      ? event.target.incomeAmount.value
      : event.target.expenseAmount.value;

    const newData = {
      id: getRandomId(),
      name: name,
      value: value,
    };
    if (isIncomesForm) {
      setData((prevState) => ({
        ...prevState,
        incomes: [...data.incomes, newData],
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        expenses: [...data.expenses, newData],
      }));
    }

    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formName}>{formType}</h2>
      <input
        className={styles.inputField}
        type="text"
        placeholder={formType === "INCOMES" ? "Income name" : "Expense name"}
        required
        name={isIncomesForm ? "incomeName" : "expenseName"}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Amount"
        required
        min="0.01"
        step="0.01"
        name={isIncomesForm ? "incomeAmount" : "expenseAmount"}
      />
      <button className={styles.greenBtn}>Add</button>
    </form>
  );
};

export default Form;
