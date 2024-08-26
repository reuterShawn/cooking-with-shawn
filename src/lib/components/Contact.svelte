<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      // Reset form fields after submission
      name = '';
      email = '';
      message = '';
    }
  </script>
  
  <container class="header-text">
    <h2>Contact Me</h2>
  </container>
<div class="background">

  <form on:submit|preventDefault={handleSubmit} class="form-right">
    <div>
      <input placeholder="Your Name" id="name" type="text" bind:value={name} required>
    </div>
  
    <div>
      <input placeholder="Email" id="email" type="email" bind:value={email} required>
    </div>
  
    <div>
      <label for="message">Message:</label>
      <textarea id="message" bind:value={message} required></textarea>
    </div>
  
    <button type="submit">Send</button>
  </form>
  
</div>

  <style>

    .form-right {
        padding-left: 20em;
    }

    form {
      max-width: 400px;
      margin: 0 auto;
      padding-top: 5rem;
    }
  
    div {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    input, textarea {
      width: 50%;
      padding: 0.5rem;
      flex-direction: column;
    }
  
    textarea {
      height: 100px;
    }
  
    button {
      background-color: #4CAF50;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>