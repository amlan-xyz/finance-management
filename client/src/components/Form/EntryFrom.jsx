import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../../actions/add-entry.action";

export const EntryForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    type: "",
    category: "",
    amount: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addEntry(form));
    setForm({
      type: "",
      category: "",
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
        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          value={form.category}
          required
          disabled={form.type.length === 0 ? true : false}
        >
          <option value="">Select</option>
          {form.type === "income" ? (
            <>
              <option value="salary">Salary</option>
              <option value="business">Business</option>
              <option value="freelancing">Freelancing</option>
              <option value="others">Others</option>
            </>
          ) : form.type === "expense" ? (
            <>
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="EMI">EMI</option>
              <option value="others">Others</option>
            </>
          ) : (
            <>
              <option value="FD">FD</option>
              <option value="stocks/mf">Stocks/MF</option>
              <option value="others">Others</option>
            </>
          )}
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
