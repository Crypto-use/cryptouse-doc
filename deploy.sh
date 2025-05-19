#!/bin/bash
echo "Iniciando deploy para o Vercel..."

# Verificar se há alterações não commitadas
if [ -n "$(git status --porcelain)" ]; then
  echo "Há alterações não commitadas. Commitando alterações..."
  git add .
  git commit -m "Preparando para deploy"
fi

# Executar o deploy para produção
echo "Executando deploy para produção..."
vercel --prod

echo "Deploy concluído!" 