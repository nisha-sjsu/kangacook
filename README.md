# Recipes Web App

This project is a simple recipe web application built with React.js for the frontend and Django for the backend. The frontend allows users to view a list of recipes and detailed information about each recipe. The backend provides API endpoints for managing the recipe data.

## Features

- **Frontend:** Built with React.js to display recipes and their details.
- **Backend:** Powered by Django with REST API endpoints to serve recipe data.
- **Dreamy Design:** Soft colors, subtle gradients, and elegant fonts to create a dreamy aesthetic.

## Prerequisites

- Python 3.x
- Node.js and npm
- pip (Python package installer)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dreamy-recipes.git
cd dreamy-recipes
```

### 2. Backend Setup (Django)

**Step 1: Create a Virtual Environment and Activate It**

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

**Step 2: Install Python Dependencies**

```bash
pip install -r requirements.txt
```

**Step 3: Apply Migrations**

```bash
python manage.py makemigrations
python manage.py migrate
```

**Step 4: Create a Superuser**

Create an admin account to access the Django admin interface:

```bash
python manage.py createsuperuser
```

**Step 5: Run the Django Development Server**

```bash
python manage.py runserver
```

The backend will be running at `http://localhost:8000/`.

### 3. Frontend Setup (React.js)

**Step 1: Navigate to the Frontend Directory**

```bash
cd frontend
```

**Step 2: Install Node.js Dependencies**

```bash
npm install
```

**Step 3: Run the React Development Server**

```bash
npm start
```

The frontend will be running at `http://localhost:3000/`.

## Adding Recipe Data to the Database

### Method 1: Django Admin Interface

1. Visit `http://localhost:8000/admin/` and log in with the superuser credentials you created.
2. Click on the "Recipes" model.
3. Add new recipes through the admin interface by filling out the form fields.

### Method 2: Django Shell

You can also add recipes directly through the Django shell.

**Step 1: Open the Django Shell**

```bash
python manage.py shell
```

**Step 2: Add Sample Recipes**

```python
from recipes.models import Recipe

# Sample Recipe 1
Recipe.objects.create(
    title="Spaghetti Carbonara",
    description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    ingredients="Spaghetti, eggs, Parmesan cheese, pancetta, black pepper",
    instructions="Cook spaghetti. In a separate bowl, whisk eggs and Parmesan. Cook pancetta until crispy. Combine spaghetti, pancetta, and egg mixture. Serve hot."
)

# Sample Recipe 2
Recipe.objects.create(
    title="Chicken Alfredo",
    description="A creamy pasta dish made with grilled chicken and Alfredo sauce.",
    ingredients="Fettuccine, chicken breast, butter, heavy cream, Parmesan cheese, garlic, salt, pepper",
    instructions="Cook fettuccine. In a pan, melt butter and sauté garlic. Add heavy cream and simmer. Stir in Parmesan cheese until melted. Add grilled chicken slices and mix with fettuccine. Serve hot."
)

# Sample Recipe 3
Recipe.objects.create(
    title="Beef Tacos",
    description="Mexican-style tacos filled with seasoned beef, fresh vegetables, and cheese.",
    ingredients="Ground beef, taco seasoning, tortillas, lettuce, tomatoes, cheddar cheese, sour cream, salsa",
    instructions="Cook ground beef with taco seasoning. Warm tortillas in a pan. Fill tortillas with beef, lettuce, tomatoes, cheese, and top with sour cream and salsa. Serve immediately."
)

# Sample Recipe 4
Recipe.objects.create(
    title="Vegetable Stir-Fry",
    description="A quick and healthy stir-fry made with fresh vegetables and a savory sauce.",
    ingredients="Broccoli, bell peppers, carrots, snow peas, soy sauce, garlic, ginger, olive oil, rice",
    instructions="Heat oil in a wok. Add garlic and ginger, stir-fry for 30 seconds. Add vegetables and stir-fry until tender. Pour in soy sauce and stir well. Serve over steamed rice."
)

# Sample Recipe 5
Recipe.objects.create(
    title="Chocolate Chip Cookies",
    description="Classic chocolate chip cookies that are crispy on the outside and chewy on the inside.",
    ingredients="Butter, sugar, brown sugar, eggs, vanilla extract, flour, baking soda, salt, chocolate chips",
    instructions="Preheat oven to 350°F (175°C). Cream together butter and sugars. Add eggs and vanilla, mix well. Stir in flour, baking soda, and salt. Fold in chocolate chips. Drop spoonfuls onto baking sheet. Bake for 10-12 minutes until edges are golden. Let cool before serving."
)
```

### Method 3: API POST Request

You can also add recipes via a POST request to the API endpoint:

1. Use a tool like Postman or Curl to send a POST request to `http://localhost:8000/api/recipes/add/` with the recipe data in JSON format.

Example JSON data:
```json
{
    "title": "Chicken Alfredo",
    "description": "A creamy pasta dish made with grilled chicken and Alfredo sauce.",
    "ingredients": "Fettuccine, chicken breast, butter, heavy cream, Parmesan cheese, garlic, salt, pepper",
    "instructions": "Cook fettuccine. In a pan, melt butter and sauté garlic. Add heavy cream and simmer. Stir in Parmesan cheese until melted. Add grilled chicken slices and mix with fettuccine. Serve hot."
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This `README.md` provides clear setup instructions and options for adding recipe data to your project. Adjust the repository URL and any specific details as needed for your project.
