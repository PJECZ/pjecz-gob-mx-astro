# pjecz-gob-mx-astro

if [ -f ~/.bashrc ]
then
    . ~/.bashrc
fi

if [[ "$TOOLBOX_NAME" != "pjecz-investigator" ]]
then
    echo "-- Debe de ingresar al toolbox"
    echo "   toolbox enter pjecz-investigator"
    echo
    exit 1
fi

if command -v figlet &> /dev/null
then
    figlet PJECZ.gob.mx Astro
else
    echo "== PJECZ.gob.mx Astro"
fi
echo

echo "-- Arrancar en desarrollo"
echo "   npm run dev"
echo
