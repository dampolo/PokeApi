
const imageTypes = [
    'back_default',
    'back_female',
    'back_shiny',
    'back_shiny_female',
    'front_default',
    'front_female',
    'front_shiny',
    'front_shiny_female',
    'other.dream_world.front_default',
    'other.dream_world.front_female',
    'other.dream_world.front_shiny',
    'other.dream_world.front_shiny_female',
    'other.home.front_default',
    'other.home.front_female',
    'other.home.front_shiny',
    'other.home.front_shiny_female',
    'other.official-artwork.front_default',
    'other.official-artwork.front_female',
    'other.official-artwork.front_shiny',
    'other.official-artwork.front_shiny_female',
    'other.showdown.back_default',
    'other.showdown.back_shiny',
    'other.showdown.front_default',
    'other.showdown.front_shiny',
    'other.showdown.front_shiny',
    'versions.generation-i.red-blue.back_default',
    'versions.generation-i.red-blue.back_gray',
    'versions.generation-i.red-blue.back_transparent',
    'versions.generation-i.red-blue.front_default',
    'versions.generation-i.red-blue.front_gray',
    'versions.generation-i.red-blue.back_transparent',
    'versions.generation-i.yellow.back_default',
    'versions.generation-i.red-blue.back_gray',
    'versions.generation-i.yellow.back_transparent',
    'versions.generation-i.yellow.front_default',
    'versions.generation-i.yellow.front_gray',
    'versions.generation-i.yellow.back_transparent',
    "versions.generation-ii.crystal.back_default",
    "versions.generation-ii.crystal.back_shiny",
    "versions.generation-ii.crystal.back_shiny_transparent",
    "versions.generation-ii.crystal.back_transparent",
    "versions.generation-ii.crystal.front_default",
    "versions.generation-ii.crystal.front_shiny",
    "versions.generation-ii.crystal.front_shiny_transparent",
    "versions.generation-ii.crystal.front_transparent",
    "versions.generation-ii.gold.back_default",
    "versions.generation-ii.gold.back_shiny",
    "versions.generation-ii.gold.front_default",
    "versions.generation-ii.gold.front_shiny",
    "versions.generation-ii.gold.front_transparent",
    "versions.generation-ii.silver.back_default",
    "versions.generation-ii.silver.back_shiny",
    "versions.generation-ii.silver.front_default",
    "versions.generation-ii.silver.front_shiny",
    "versions.generation-ii.silver.front_transparent",
    "versions.generation-iii.emerald.front_default",
    "versions.generation-iii.emerald.front_shiny",
    "versions.generation-iii.firered-leafgreen.back_default",
    "versions.generation-iii.firered-leafgreen.back_shiny",
    "versions.generation-iii.firered-leafgreen.front_default",
    "versions.generation-iii.firered-leafgreen.front_shiny",
    "versions.generation-iii.ruby-sapphire.back_default",
    "versions.generation-iii.ruby-sapphire.back_shiny",
    "versions.generation-iii.ruby-sapphire.front_default",
    "versions.generation-iii.ruby-sapphire.front_shiny",
    "versions.generation-iv.diamond-pearl.back_default",
    "versions.generation-iv.diamond-pearl.back_female",
    "versions.generation-iv.diamond-pearl.back_shiny",
    "versions.generation-iv.diamond-pearl.back_shiny_female",
    "versions.generation-iv.diamond-pearl.front_default",
    "versions.generation-iv.diamond-pearl.front_female",
    "versions.generation-iv.diamond-pearl.front_shiny",
    "versions.generation-iv.diamond-pearl.front_shiny_female",
    "versions.generation-iv.heartgold-soulsilver.back_default",
    "versions.generation-iv.heartgold-soulsilver.back_female",
    "versions.generation-iv.heartgold-soulsilver.back_shiny",
    "versions.generation-iv.heartgold-soulsilver.back_shiny_female",
    "versions.generation-iv.heartgold-soulsilver.front_default",
    "versions.generation-iv.heartgold-soulsilver.front_female",
    "versions.generation-iv.heartgold-soulsilver.front_shiny",
    "versions.generation-iv.heartgold-soulsilver.front_shiny_female",
    "versions.generation-iv.platinum.back_default",
    "versions.generation-iv.platinum.back_female",
    "versions.generation-iv.platinum.back_shiny",
    "versions.generation-iv.platinum.back_shiny_female",
    "versions.generation-iv.platinum.front_default",
    "versions.generation-iv.platinum.front_female",
    "versions.generation-iv.platinum.front_shiny",
    "versions.generation-iv.platinum.front_shiny_female",
    "versions.generation-v.black-white.animated.back_default",
    "versions.generation-v.black-white.animated.back_female",
    "versions.generation-v.black-white.animated.back_shiny",
    "versions.generation-v.black-white.animated.back_shiny_female",
    "versions.generation-v.black-white.animated.front_default",
    "versions.generation-v.black-white.animated.front_female",
    "versions.generation-v.black-white.animated.front_shiny",
    "versions.generation-v.black-white.animated.front_shiny_female",
    "versions.generation-v.black-white.back_default",
    "versions.generation-v.black-white.back_female",
    "versions.generation-v.black-white.back_shiny",
    "versions.generation-v.black-white.back_shiny_female",
    "versions.generation-v.black-white.front_default",
    "versions.generation-v.black-white.front_female",
    "versions.generation-v.black-white.front_shiny",
    "versions.generation-v.black-white.front_shiny_female",
    "versions.generation-vi.omegaruby-alphasapphire.front_default",
    "versions.generation-vi.omegaruby-alphasapphire.front_female",
    "versions.generation-vi.omegaruby-alphasapphire.front_shiny",
    "versions.generation-vi.omegaruby-alphasapphire.front_shiny_female",
    "versions.generation-vi.x-y.front_default",
    "versions.generation-vi.x-y.front_female",
    "versions.generation-vi.x-y.front_shiny",
    "versions.generation-vi.x-y.front_shiny_female",
    "versions.generation-vii.icons.front_default",
    "versions.generation-vii.icons.front_female",
    "versions.generation-vii.ultra-sun-ultra-moon.front_default",
    "versions.generation-vii.ultra-sun-ultra-moon.front_female",
    "versions.generation-vii.ultra-sun-ultra-moon.front_shiny",
    "versions.generation-vii.ultra-sun-ultra-moon.front_shiny_female",
    "versions.generation-viii.icons.front_default",
    "versions.generation-viii.icons.front_female",
    "versions.generation-viii.icons.front_shiny",
    "versions.generation-viii.icons.front_shiny_female"
    ];