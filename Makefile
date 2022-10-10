install: #первый запуск
	npm ci

brain-games: #запуск
	node bin/brain-games.js

publish:
	npm publish --dry-run
