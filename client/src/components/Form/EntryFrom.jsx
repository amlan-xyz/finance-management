import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../../actions/add-entry.action";

export const EntryForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    type: "",
    amount: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry(form));
    setForm({
      type: "",
      amount: "",
      description: "",
    });
  };

  return (
    <div className="entry__form-container">
      <form onSubmit={handleSubmit} className="entry__form">
        <label htmlFor="entry">Entry Type</label>
        <select
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          id="entry"
          required
          value={form.type}
        >
          <option value="">Select</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings">Savings</option>
        </select>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          value={form.amount}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id=""
          cols="30"
          rows="3"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
