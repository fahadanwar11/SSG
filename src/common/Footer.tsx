import type React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, MailIcon, PhoneCallIcon } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

import { IoLocationOutline } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services/security-guard-services", label: "Services" },
  { href: "/sectors/corporate-office-security", label: "Sectors" },
  { href: "/careers", label: "Careers" },
  { href: "/request-a-quote", label: "Request a Quote" },
];

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  interface FormData {
    email: string;
  }

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const templateParams = {
        user_email: data.email,
      };

      await emailjs.send(
        "service_q9jnoys", 
        "template_csreqhq", 
        templateParams,
        "6jYhGtY7joKwzm02c" // Replace with your EmailJS Public Key
      );

      toast.success("Successfully subscribed to our mailing list!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to subscribe. Please try again.");
    }

    setIsSubmitting(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Mailing List</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-4 max-w-md">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.email.message as string}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  className="bg-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4 bg-primary" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 md:justify-self-end"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </motion.div>
            ))}
          </motion.nav>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-gray-600 flex flex-col gap-2.5 lg:flex-row lg:justify-between lg:items-center px-0 py-2 rounded-lg w-full text-sm"
        >
          <div className="flex gap-2 items-center">
            <IoLocationOutline size={16} />
            <p>41 Sunflower Drive, Beveridge VIC 3753</p>
          </div>
          <div className="flex gap-2 items-center">
            <PhoneCallIcon size={16} />
            <a href="tel:0480247436">0480 247 436</a>
          </div>
          <div className="flex gap-2 items-center">
            <MailIcon size={16} />
            <a href="admin@securityservicegroup.com.au">
              admin@securityservicegroup.com.au
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 border-t border-gray-200"
        >
          {/* Footer Text */}
          <p className="text-sm text-primary text-center w-full md:w-auto">
            © SSG Website
          </p>

          {/* Social Links & Scroll Button */}
          <div className="flex flex-wrap items-center gap-4 justify-center w-full md:w-auto">
            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a
                href="https://www.facebook.com/share/1EA1NH6hBH/?mibextid=wwXIfr"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/securityservice_group?igsh=ODJveWJnb2JmbWI5&utm_source=qr"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.tiktok.com/@security.service.g?_t=ZS-8uZksnGveO9&_r=1"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll To Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="bg-gray-800 text-white py-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-sm">LICENCE NUMBER Z46-120-60S</p>
          <p className="text-gray-300 text-sm">ABN 36 675 127 670</p>
        </div>
      </motion.div>
    </footer>
  );
}
