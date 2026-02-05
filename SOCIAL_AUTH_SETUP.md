# social_auth_setup_guide.md

## 1. Supabase Callback URL
First, you need to know your callback URL.
1. Go to **Supabase Dashboard** -> **Authentication** -> **URL Configuration**.
2. Copy the **Site URL**. It should look like `https://<your-project>.supabase.co`.
3. Add `http://localhost:5173` to **Redirect URLs** for local development.

---

## 2. GitHub Login Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click **New OAuth App**.
3. Fill in the details:
   - **Application Name**: CodeRef
   - **Homepage URL**: `http://localhost:5173` (or your production URL)
   - **Authorization callback URL**: `https://<your-project>.supabase.co/auth/v1/callback` (Get this from Supabase Dashboard -> Auth -> Providers -> GitHub)
4. Click **Register application**.
5. Copy query **Client ID** and generate a new **Client Secret**.
6. Go back to **Supabase Dashboard** -> **Authentication** -> **Providers** -> **GitHub**.
7. Paste the **Client ID** and **Client Secret**.
8. Ensure **Enable GitHub provider** is checked.
9. Click **Save**.

---

## 3. Google Login Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., "CodeRef").
3. Search for "**OAuth consent screen**" and configure it:
   - User Type: **External**
   - Fill in app name, support email, etc.
4. Go to **Credentials** -> **Create Credentials** -> **OAuth client ID**.
   - Application type: **Web application**
   - Name: CodeRef Client
   - **Authorized JavaScript origins**: `http://localhost:5173` AND `https://<your-project>.supabase.co`
   - **Authorized redirect URIs**: `https://<your-project>.supabase.co/auth/v1/callback`
5. Copy the **Client ID** and **Client Secret**.
6. Go back to **Supabase Dashboard** -> **Authentication** -> **Providers** -> **Google**.
7. Paste the **Client ID** and **Client Secret**.
8. Ensure **Enable Google provider** is checked.
9. Click **Save**.

---

## 4. Testing

1. Restart your dev server to ensure env vars are loaded: `npm run dev`
2. Go to `/login` page.
3. Click "Continue with GitHub" or "Continue with Google".
4. If configured correctly, it should redirect you to the provider and back to the dashboard.
