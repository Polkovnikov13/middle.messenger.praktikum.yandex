export const tmpl = `
<div class="login-container">{{tittle}}
  <form onsubmit="event.preventDefault();">
    {{{inputLogin}}}
    <span id="error-message-login"></span>
    {{{inputPassword}}}
     <span id="error-message-password"></span>
    <div class="login-button">
      {{{button}}}
      <a href="/registration">{{{buttonLink}}}</a>
    </div>
  </form>
</div>
`
