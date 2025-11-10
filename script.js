
const trackForm = document.querySelector('.track-section form');

if (trackForm) {
  trackForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const orderID = document.getElementById('orderID').value.trim();

    if (!orderID) {
      alert('Please enter your Order ID.');
      return;
    }

    try {
      // Replace this URL with your API endpoint
      const response = await fetch('https://api.jsonbin.io/v3/b/6911f945ae596e708f50881d');
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      // Assuming your API returns an array of orders
      const order = data.find(o => o.id === orderID);

      if (order) {
        alert(`Order ${orderID} status: ${order.status}`);
      } else {
        alert(`Order ${orderID} not found.`);
      }

    } catch (error) {
      console.error('Fetch error:', error);
      alert('Could not fetch order data.');
    }

    trackForm.reset();
  });
}

