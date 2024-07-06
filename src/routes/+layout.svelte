<script>
  import '../app.css';
  export const prerender = true
</script>

<header>
  <h1>Nikolashina Mariia</h1>
  <p>Backend developer</p>
  <nav>
    <ul class="social-links">
      <li><a href="/">About</a></li>
      <li><a href="/experience">Work experience</a></li>
      <li><a href="/skills">Hard skills</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/comic">Comic</a></li>
    </ul>
  </nav>
</header>

<slot></slot>

<footer>
  <p>&copy; 2024 Nikolashina Mariia</p>
</footer>
