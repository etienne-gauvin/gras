import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('--- Recipe Router')

  next()
})

/**
 * Liste de recettes
 * /recipe/list/page-3
 */
router.get(/\/list\/page-(\d+)/, (req, res) => {
  res.json({
    title: "Liste des recettes",
    page: req.params[1],
    recipes: [
      { title: "Recette A" },
      { title: "Recette B" },
      { title: "Recette C" },
    ]
  })
})

/**
 * Récupérer une seule recette
 */
router.get(/\/(\d+)/, (req, res) => {
  res.json({
    title: "Recette",
    recipe: {
      id: req.params[1],
      title: "Recette A"
    },
  })
})

export default router
