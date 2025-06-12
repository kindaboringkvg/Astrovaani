"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CheckCircle, AlertCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function handleSubmit(data: FormValues) {
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Check if URL is configured
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (!scriptUrl) {
        throw new Error("Google Script URL not configured")
      }

      console.log("Sending to:", scriptUrl)
      console.log("Data:", data)

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // This might help with CORS issues
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      // With no-cors mode, we can't read the response
      // So we'll assume success if no error is thrown
      console.log("Response status:", response.status)
      
      // If using no-cors, we can't read response.json()
      // Comment out the lines below if using no-cors
      /*
      const result = await response.json()
      console.log("Response:", result)

      if (result.result === "success") {
        setIsSubmitted(true)
      } else {
        throw new Error(result.message || "Unknown error occurred")
      }
      */
      
      // With no-cors, assume success
      setIsSubmitted(true)
      
    } catch (error) {
      console.error("Submission error:", error)
      setError(error instanceof Error ? error.message : "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Our celestial team will get back to you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 md:p-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}
      
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit(handleSubmit)(e)
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Message subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  )
}