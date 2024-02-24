 
async function getUsers() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'GET',
        },
      );
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  

  getUsers().then(data => {
    console.log(data);
  
    const ol = document.createElement('ol');
  
    data.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = user.name;
  
      li.style.fontSize = '22px';
  
      const ul = document.createElement('ul');
  
      const company = document.createElement('li');
      company.innerHTML = `Company: ${user.company.name}`;
  
      const city = document.createElement('li');
      city.innerHTML = `City: ${user.address.city}`;
  
      const email = document.createElement('li');
      email.innerHTML = `Email: ${user.email}`;
  
      const phone = document.createElement('li');
      phone.innerHTML = `Phone: ${user.phone}`;
  
      ul.append(...[company, city, email, phone]);
  
      li.appendChild(ul);
  
      ol.appendChild(li);
    });
  
    const container = document.getElementById('container');
    container.appendChild(ol);
  });
