import os
import src.multiplat as mp

fail = False
if( not os.path.exists('_env')):
    if(mp.eh_linux):
        if not mp.run("python3 -m venv _env"):
            fail = True
    else:
        if not mp.run("python -m venv _env"):
            fail = True
    if not fail:
        if(mp.eh_linux):
            if not mp.run("source ./_env/bin/activate"):
                fail = True
        else:
            if not mp.run("_env\\Scripts\\activate.bat"):
                fail = True
    else:
        print("2305232021 - unable to create virtual environment")
        if mp.eh_linux: print("On linux, you need to install python3-venv")

    if not fail:
        if mp.eh_linux:
            if not mp.run("pip3 install -r src/requirements.txt"):
                fail = True
        else:
            if not mp.run("pip install -r src\\requirements.txt"):
                fail = True
    else:
        print('2305232019 - unable to activate environment')

if not fail:
    if mp.eh_linux:
        if not mp.run("python3 src/main.py"):
            fail = True
    else:
        if not mp.run("python src\\main.py"):
            fail = True
    
    if fail:
        print('2305232053 - Impossible run')
    else:
        print('2305232055 - Ends Successfully') 
else:
    print('2305232032 - Impossible install dependences')