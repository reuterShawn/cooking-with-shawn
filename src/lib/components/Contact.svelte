 <script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  async function handleSubmit() {
    status = 'Sending...';
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'your@email.com',
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      status = 'Message sent successfully!';
      name = '';
      email = '';
      message = '';
    } else {
      status = 'Failed to send message. Please try again.';
    }
  }
</script>

  
  <div class="grid">

  <section class="header-text">
    <h2>Contact Me</h2>
    <p>
      Hello and Welcome to Fulimillment fill out this contact form to get in contact with me.
    </p>
  </section>

<div class="background">

  <form on:submit|preventDefault={handleSubmit} class="form-right">
    <div>
      <input placeholder="Your Name" id="name" type="text" bind:value={name} required>
    </div>
  
    <div>
      <input placeholder="Email" id="email" type="email" bind:value={email} required>
    </div>
  
    <div>
      <textarea id="message" bind:value={message} required></textarea>
    </div>
  
    <button type="submit">Send</button>
  </form>
      

  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={name} placeholder="Your Name" required>
    <input bind:value={email} type="email" placeholder="Your Email" required>
    <textarea bind:value={message} placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
  
  {#if status}
    <p>{status}</p>
  {/if}
</div>

</div>


  <style>
    .grid {
      display: grid;
      grid-template-columns: 300px 400px;
      flex-wrap: wrap;
      gap: 2em;
    }

    .header-text {
      padding-top: 25%;
      width: fit-content;
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
  
    /* label {
      display: block;
      margin-bottom: 0.5rem;
    } */
  
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
      border-radius: 1em;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>