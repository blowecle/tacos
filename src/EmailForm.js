

export default function EmailForm() {


      return (
        <form netlify>
    <input
      type="email"
      placeholder="Your email"
      required
    />
    <textarea
      placeholder="Your message"
      required
    ></textarea>
    <button type="submit">Send</button>
  </form>
      );
}
