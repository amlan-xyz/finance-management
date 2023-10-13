import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addEntry } from "../../actions/add-entry.action";
import "./EntryForm.css";
export const EntryForm = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    type: "",
    category: "",
    amount: "",
    description: "",
  });

  const resetForm = () => {
    setForm({
      type: "",
      category: "",
      amount: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry(form));
    resetForm();
    setShowForm(false);
  };

  return (
    <div className="entry__form-container">
      <button className="primary__btn" onClick={() => setShowForm(true)}>
        Add Details
      </button>
      {showForm && (
        <div className="modal">
          <div className="modal_wrapper"></div>
          <div className="modal_container">
            <div className="entry__form-header">
              <h2>Add Financial Details</h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
              >
                <AiOutlineClose className="fill_icon" />
              </button>
            </div>

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
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              ></textarea>
              <button className="entry__form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
