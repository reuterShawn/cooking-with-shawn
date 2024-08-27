<script>
	let siteName = "Fulfillment Cooking"
</script>

<header>
	<nav>
    <h1>{siteName}</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
	</nav>

</header>

<style>
	header {
		display: flex;
    background-color: var(--darkMain);
		justify-content: space-between;
    width: 100%;
    padding: 2em;
	}

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #ffd0f1;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }


  li {
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
</style>