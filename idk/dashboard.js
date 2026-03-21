document.addEventListener('DOMContentLoaded', () => {
    const borrowedBooks = [
        { id: 101, title: "The Great Gatsby", author: "F. Scott Fitzgerald", borrowedOn: "2026-03-01", dueDate: "2026-03-15" },
        { id: 102, title: "1984", author: "George Orwell", borrowedOn: "2026-02-10", dueDate: "2026-02-24" },
        { id: 103, title: "The Hobbit", author: "J.R.R. Tolkien", borrowedOn: "2026-03-10", dueDate: "2026-03-24" }
    ];

    const tableBody = document.querySelector('#borrowed-body');
    const today = new Date();

    // Clear existing static rows if you want a fresh start
    tableBody.innerHTML = '';

    // Loop through the ARRAY, not the DOM nodes
    borrowedBooks.forEach(book => {
        const dueDate = new Date(book.dueDate);
        const isOverdue = dueDate < today;

        // Create a new row element
        const row = document.createElement('tr');
        row.dataset.bookId = book.id;

        // Populate the inner HTML of that row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.borrowedOn}</td>
            <td class="due-date">${book.dueDate}</td>
            <td class="status-cell" style="color: ${isOverdue ? 'red' : 'green'}; font-weight: bold;">
                ${isOverdue ? 'Overdue' : 'Active'}
            </td>
            <td>
                <button class="return-btn">Return</button>
            </td>
        `;

        // Add the event listener to the button we just created
        row.querySelector('.return-btn').addEventListener('click', async () => {
            // Your existing fetch logic goes here...
            console.log(`Returning book ${book.id}`);
            row.remove(); 
        });

        // Finally, append the row to the table
        tableBody.appendChild(row);
    });
});