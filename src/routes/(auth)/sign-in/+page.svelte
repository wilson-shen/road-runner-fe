<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { z } from 'zod';

  interface FormProps {
    email?: string;
    password?: string;
    remember: boolean;
  }

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    remember: z.boolean(),
  });

  const form = $state<FormProps>({
    email: undefined,
    password: undefined,
    remember: false,
  });

  let errors = $state<z.ZodFormattedError<FormProps>>();

  function handleSubmit(event: Event) {
    event.preventDefault();

    const validated = schema.safeParse(form);

    if (!validated.success) {
      errors = validated.error.format();

      return;
    }

    console.log(schema.parse(form).email);
  }
</script>

<Card class="w-full max-w-md">
  <CardHeader class="space-y-1">
    <CardTitle class="text-center text-2xl font-bold">Sign In</CardTitle>
    <CardDescription class="text-center">Enter your email and password to access your account</CardDescription>
  </CardHeader>
  <form onsubmit={handleSubmit}>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          bind:value={form.email}
          class={errors?.email?._errors ? 'border-red-500' : ''}
        />
        {#if errors?.email?._errors}
          <p class="text-sm text-red-500">Please enter a valid email address</p>
        {/if}
      </div>
      <div class="space-y-2">
        <Label for="password">Password</Label>
        <Input
          id="password"
          type="password"
          bind:value={form.password}
          class={errors?.password?._errors ? 'border-red-500' : ''}
        />
        {#if errors?.password?._errors}
          <p class="text-sm text-red-500">Please enter a password</p>
        {/if}
      </div>
      <div class="flex items-center space-x-2">
        <Checkbox
          id="remember"
          bind:checked={form.remember}
        />
        <Label for="remember">Remember me</Label>
      </div>
    </CardContent>
    <CardFooter class="flex flex-col space-y-4">
      <Button
        type="submit"
        class="w-full">Sign In</Button
      >
      <p class="text-center text-sm text-gray-600">
        Don't have an account?
        <a
          href="/sign-up"
          class="text-primary hover:underline"
        >
          Sign up
        </a>
      </p>
    </CardFooter>
  </form>
</Card>
