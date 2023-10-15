export const tmpl = `
<div class="login-container">{{tittle}}
<form onsubmit="event.preventDefault();" >
  {{{inputLogin}}}
  {{{inputPassword}}}
  <div class="login-button">
    {{{button}}}
   <a href="/registration">{{{buttonLink}}}</a>
  </div>
   </form>
</div>
`
