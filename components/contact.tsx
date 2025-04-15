"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [email, setEmail] = useState<EmailData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setEmail({
      ...email,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      emailjs.init("h44gOczMwSZS3CZwA");

      const templateParams = {
        from_name: email.name,
        from_email: email.email,
        subject: email.subject,
        message: email.message,
      };

      const response = await emailjs.send(
        "service_4uqkr5b",
        "template_gdrw09o",
        templateParams
      );
      console.log("Correo enviado exitosamente:", response.text);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9c5bdb]/8 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl gradient-text">
            Contact Me
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let&apos;s work together on your next project
          </p>
        </div>
        <div className="mx-auto max-w-2xl mt-16 animate-fade-in">
          <Card className="shadow-custom border-0 bg-card backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      value={email.name}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={email.email}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    required
                    id="subject"
                    name="subject"
                    value={email.subject}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={email.message}
                    onChange={handleChange}
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full w-full cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              transform: "translateX(-50%)",
              backgroundColor: "#4caf50",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "8px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
              zIndex: 1000,
            }}
          >
            ¡Correo enviado exitosamente!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
