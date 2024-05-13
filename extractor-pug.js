export default function extractorPug(options = {}) {
  async function compile(code, id) {
    const Pug = await import('pug');
    try {
      return Pug.compile(code, options)();
    } catch {}
  }

  return {
    name: 'pug',
    order: -1,
    async extract(ctx) {
      try {
        ctx.code = (await compile(ctx.code, ctx.id)) || ctx.code;
      } catch {}
    },
  };
}
