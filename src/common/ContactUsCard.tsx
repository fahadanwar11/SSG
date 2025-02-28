import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ContactUsCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl w-11/12 lg:w-10/12 mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-left lg:mb-12 md:mb-8 sm:mb-6 "
      >
        Contact Us
      </motion.h1>

      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3"
            />
          </motion.div>
          <AnimatePresence>
            {errors.name && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-500"
              >
                {errors.name.message}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-3"
            />
          </motion.div>
          <AnimatePresence>
            {errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-500"
              >
                {errors.email.message}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Textarea
              id="message"
              placeholder="Enter your message here..."
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 min-h-[200px]"
            />
          </motion.div>
          <AnimatePresence>
            {errors.message && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-500"
              >
                {errors.message.message}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
