export const tmpl = `
<div class="login-container">{{tittle}}
<form onsubmit="event.preventDefault();" >
  {{{login}}}
  {{{password}}}
  <div class="login-button">
    {{{button}}}
   <a href="/registration">{{{buttonLink}}}</a>
  </div>
   </form>
</div>
`;
