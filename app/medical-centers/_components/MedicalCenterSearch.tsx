// app/medical-centers/_components/MedicalCenterSearch.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const searchSchema = z.object({
  country: z.string().min(2, 'Please select a country'),
  city: z.string().min(2, 'Please enter a city'),
})

type MedicalCenter = {
  id: string
  name: string
  address: string
  country: string
  city: string
}

export default function MedicalCenterSearch() {
  const [searchResults, setSearchResults] = useState<MedicalCenter[]>([])

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      country: '',
      city: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof searchSchema>) => {
    // Here you would typically fetch data from your API
    const response = await fetch(`/api/medical-centers?country=${values.country}&city=${values.city}`)
    const data = await response.json()
    setSearchResults(data)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sa">Saudi Arabia</SelectItem>
                    <SelectItem value="ae">United Arab Emirates</SelectItem>
                    <SelectItem value="kw">Kuwait</SelectItem>
                    {/* Add more GCC countries */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        {searchResults.length > 0 ? (
          <ul className="space-y-4">
            {searchResults.map((center) => (
              <li key={center.id} className="border p-4 rounded-md">
                <h3 className="text-xl font-semibold">{center.name}</h3>
                <p>{center.address}</p>
                <p>{center.city}, {center.country}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No medical centers found. Try adjusting your search criteria.</p>
        )}
      </div>
    </div>
  )
}