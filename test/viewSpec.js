const SANDBOX = "sandbox",
      SANDBOX_EL = `#${SANDBOX}`;

describe("Given an Virtual Dom View", () => {
  describe("can creating a standard instance", () => {
    it("has a View", () => {
      expect(VirtualDOM.VirtualDomView).to.not.be.undefined;
    });

    describe("can render", () => {
      let view = null, sandbox = null;

      beforeEach(() => {
        view = new VirtualDOM.VirtualDomView({
          "el": SANDBOX_EL
        });
      });

      afterEach(() => {
        view.remove();
        view = null;
        sandbox = null;
      });

      it("can render a simple template", async () => {
        view.template = `<div id="test"><h1>Test</h1></div>`;
        const v = await view.render();
        sandbox = await document.getElementById(SANDBOX);
        expect(v).to.not.be.undefined;
        expect(sandbox.innerHTML).to.deep.equal(view.template);
        console.debug("sandbox", sandbox.innerHTML);
      });

      it("can render a simple template and change it slightly", async () => {
        view.template = `<div id="test"><h1>Test</h1></div>`;
        let v = await view.render();
        view.template = `<div id="test"><h2 class="header">Test</h2><p>blah blah</p></div><button>Click</button>`;
        v = await view.render();
        sandbox = await document.getElementById(SANDBOX);
        expect(v).to.not.be.undefined;
        expect(sandbox.innerHTML).to.deep.equal(view.template);
        console.debug("sandbox", sandbox.innerHTML);
      });
    });
  });
});
