import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  const onSaveHandler = (data) => {
    const newExpenseData = { ...data, id: Math.random().toString() };
    console.log(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveHandler} />
    </div>
  );
};
export default NewExpense;
