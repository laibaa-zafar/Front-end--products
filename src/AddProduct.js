import React, { useState } from 'react';
import Header from './Header';

function AddProduct () {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  async function addProduct() {
    console.warn(name, file, price, description);
  //   if (!file) {
  //     alert("Please select a file");
  //     return;
  //   }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);
  
  //   
      let result = await fetch("http://localhost:8000/api/addProduct", {
        method: 'POST',
        body: formData
  });

  //     console.log(result)
  //     if (result.ok) {
        alert("Product added successfully");
  //     } else {
  //       alert("Failed to add product");
  //     }
  //   } catch (error) {
  //     alert("Failed to add product");
  //   }
  }

  return (
    <div>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <br />
        <input
          type='text'
          placeholder='Enter the product'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='file'
          placeholder='Enter the file'
          className='form-control'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type='text'
          placeholder='Enter the price'
          className='form-control'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter the description'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className='btn btn-primary' onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};
export default AddProduct
