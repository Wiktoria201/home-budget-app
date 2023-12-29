import styles from "./List.module.css";
import { useState } from "react";

const List = ({ data, onDelete, onEdit, setData }) => {
  const [editedItem, setEditedItem] = useState(null);
  const sum = data.reduce((acc, item) => acc + Number(item.value), 0);

  const handleDeleteItem = (id) => {
    onDelete(id);
  };

  const handleEditItem = (id, newData) => {
    onEdit(id, newData);
    setEditedItem(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.sum}>
          Total: <span>{sum}</span>
        </p>
        <ul>
          {data.map((item) => (
            <div key={item.id}>
              <li className={styles.listItem} key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                  <div className={styles.listitem}>
                    <div>
                      <input
                        className={styles.inputField}
                        type="text"
                        name="name"
                        value={editedItem.name}
                        onChange={handleInputChange}
                        placeholder="Edit name"
                        required
                      />
                      <input
                        className={styles.inputField}
                        type="number"
                        name="value"
                        value={editedItem.value}
                        onChange={handleInputChange}
                        placeholder="Edit amount"
                        required
                        min="0.01"
                        step="0.01"
                      />
                    </div>
                    <div className={styles.btnContainer}>
                      <button
                        onClick={() =>
                          handleEditItem(editedItem.id, editedItem)
                        }
                        className={styles.whiteBtn}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditedItem(null)}
                        className={styles.whiteBtn}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.listItem}>
                    <div className={styles.item}>
                      <p className={styles.inputName}>{item.name}</p>
                      <p>{item.value}</p>
                    </div>
                    <div className={styles.btnContainer}>
                      <button
                        onClick={() => setEditedItem(item)}
                        className={styles.whiteBtn}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className={styles.whiteBtn}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
