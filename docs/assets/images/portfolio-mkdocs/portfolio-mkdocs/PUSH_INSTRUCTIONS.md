# Portfolio Update — Push Instructions

Follow these steps to push all the new content to `Wanjiru-1.github.io`.

---

## Step 1 — Clone your repo (if not already)

```bash
git clone https://github.com/Wanjiru-1/Wanjiru-1.github.io.git
cd Wanjiru-1.github.io
```

---

## Step 2 — Copy the new files into your repo

From the downloaded zip, copy:

```
mkdocs.yml                          → replace existing mkdocs.yml
docs/index.md                       → replace existing docs/index.md
docs/experience.md                  → replace existing docs/experience.md
docs/contact.md                     → replace or create
docs/assets/css/extra.css           → replace existing
docs/projects/index.md              → replace existing
docs/projects/kenya-youth-dashboard.md   → NEW file
docs/projects/nairobi-flood-hotspots.md  → NEW file
docs/projects/elgeyo-landslide.md        → NEW file
```

---

## Step 3 — Copy your images into docs/assets/images/

Copy these 5 files (from your uploads) into `docs/assets/images/`:

| Source filename | Save as |
|-----------------|---------|
| `jecinta_headshot.jpeg` | `jecinta_headshot.jpeg` |
| `jecinta_survey_photo.jpeg` | `jecinta_survey_photo.jpeg` |
| `kenya_youth_opportunity_dashboard__picture.png` | `kenya_youth_dashboard.png` |
| `nairobi_flood_spots_picture.jpeg` | `nairobi_flood.jpeg` |
| `elgeyo_landslide_picture.jpeg` | `elgeyo_landslide.jpeg` |

---

## Step 4 — Commit and push

```bash
git add -A
git commit -m "Update portfolio: hero, projects, experience, custom CSS"
git push origin main
```

---

## Step 5 — GitHub Actions will auto-deploy

Your repo already has a GitHub Actions workflow at `.github/workflows/`.
After pushing, go to:

**https://github.com/Wanjiru-1/Wanjiru-1.github.io/actions**

Watch for the workflow to complete (green tick ✅). Then visit:

**https://wanjiru-1.github.io/**

---

## Troubleshooting

- **DM Sans font not loading** — it's loaded from Google Fonts, just needs internet
- **Images not showing** — double-check filenames match exactly (case-sensitive)
- **Build fails** — check Actions tab for the error; most common cause is a YAML indentation issue in mkdocs.yml
