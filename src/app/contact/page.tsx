"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ReactCountryFlag from "react-country-flag";
import { countries } from "countries-list";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  application: z.string({
    required_error: "Please select an application.",
  }),
  location: z.string({
    required_error: "Please select a project location.",
  }),
  co2Capacity: z.string().min(1, {
    message: "CO2 capacity is required.",
  }),
  projectLive: z.string({
    required_error: "Please select when your project will go live.",
  }),
  referral: z.string({
    required_error: "Please select how you heard about us.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Transform countries object to array for select dropdown (too complex for my liking)
const countryListArray = Object.entries(countries)
  .map(([code, details]) => ({
    code,
    name: details.name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      co2Capacity: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Not handling that now.
    alert("Form submitted successfully!");
  }

  return (
    <MaxWidthWrapper className="flex flex-col bg-black text-white">
      <div className="flex min-h-screen flex-col items-center justify-center text-balance">
        {/* contact hero */}
        <h1 className="mb-10 text-center text-7xl font-bold lg:text-8xl">
          Contact Sales
        </h1>
        <p className="max-w-6xl text-balance text-center text-3xl">
          Contact our Sales team to tell us about your carbon removal or
          utilisation project.
        </p>
      </div>

      <div className="mx-auto w-full max-w-3xl py-16">
        <h2 className="mb-10 text-6xl font-semibold">
          Tell us about your project
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        {...field}
                        className="border-gray-700 bg-black text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        {...field}
                        className="border-gray-700 bg-black text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@company.com"
                      {...field}
                      className="border-gray-700 bg-black text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your company name"
                      {...field}
                      className="border-gray-700 bg-black text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="application"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-700 bg-black text-white">
                        <SelectValue placeholder="Select an application" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-gray-700 bg-black text-white">
                      <SelectItem value="building_materials">
                        Building materials
                      </SelectItem>
                      <SelectItem value="e_fuels">E-fuels</SelectItem>
                      <SelectItem value="removals">Removals</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-700 bg-black text-white">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-80 border-gray-700 bg-black text-white">
                      {countryListArray.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          className="flex items-center gap-2"
                        >
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{ width: "1em", height: "1em" }}
                          />
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="co2Capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CO2 Capacity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 1000 tons/year"
                      {...field}
                      className="border-gray-700 bg-black text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectLive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>When will your project go live?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-700 bg-black text-white">
                        <SelectValue placeholder="Select a year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-gray-700 bg-black text-white">
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                      <SelectItem value="2030+">2030+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referral"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where did you hear about us?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-700 bg-black text-white">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-gray-700 bg-black text-white">
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="press">Press</SelectItem>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="tender_website">
                        Tender Website
                      </SelectItem>
                      <SelectItem value="word_of_mouth">
                        Word of mouth
                      </SelectItem>
                      <SelectItem value="social">Social</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="min-h-32 border-gray-700 bg-black text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="group relative overflow-hidden rounded-full py-6 pr-12 text-xl transition-all duration-300 hover:bg-white hover:pr-14 hover:text-black">
              Submit
              <span className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:right-3 group-hover:bg-black group-hover:text-white">
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
