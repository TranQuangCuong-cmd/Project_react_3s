function Content2() {
  return (
    <div>
      <div class="title">LOGIN</div>

      <div class="input">
        <label for="name">Username</label>
        <input type="text" name="name" />
        <span class="spin"></span>
      </div>

      <div class="input">
        <label for="pass">Password</label>
        <input type="text" name="name"></input>
        <span class="spin"></span>
      </div>

      <div class="button login">
        <button>
          <span>GO</span> <i class="fa fa-check"></i>
        </button>
      </div>

      <a href="/Changepass" class="pass-forgot">
        Đổi password?
      </a>
    </div>
  );
}

export default Content2;
