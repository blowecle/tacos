

export default function EmailForm() {


      return (
        <form netlify>
    <input
      type="email"
      value={email}
      placeholder="Your email"
      required
    />
    <textarea
      value={message}
      placeholder="Your message"
      required
    ></textarea>
    <button type="submit">Send</button>
  </form>
      );
}
