

export default function EmailForm() {


      return (
        <form method="POST" data-netlify="true" name="contact">
        <input
        type="hidden"
        name="form-name"
        value="contact"
        />
            <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            />
            <textarea
            name="message"
            placeholder="Your message"
            required
            ></textarea>
            <button type="submit">Send</button>
        </form>
      );
}
