# Tarefa 02 - Fundamentos de Sistemas Operacionais

By: **William Pilger** | **2022.08.17-08.30** | **Bom Princípio - RS**

**Detalhes da máquina utilizada ($ neofetch):**
```txt
             /////////////                user@micro-02 
         /////////////////////            ------------- 
      ///////*767////////////////         OS: Pop!_OS 22.04 LTS x86_64 
    //////7676767676*//////////////       Kernel: 5.18.10-76051810-generic 
   /////76767//7676767//////////////      Uptime: 53 mins 
  /////767676///*76767///////////////     Packages: 2812 (dpkg), 39 (flatpak),  
 ///////767676///76767.///7676*///////    Shell: bash 5.1.16 
/////////767676//76767///767676////////   Resolution: 1920x1080, 1920x1080, 136 
//////////76767676767////76767/////////   DE: GNOME 42.2 
///////////76767676//////7676//////////   WM: Mutter 
////////////,7676,///////767///////////   WM Theme: Pop 
/////////////*7676///////76////////////   Theme: Pop-dark [GTK2/3] 
///////////////7676////////////////////   Icons: Pop [GTK2/3] 
 ///////////////7676///767////////////    Terminal: gnome-terminal 
  //////////////////////'////////////     CPU: Intel i5-4460 (4) @ 3.400GHz 
   //////.7676767676767676767,//////      GPU: Intel HD Graphics 
    /////767676767676767676767/////       Memory: 5340MiB / 7824MiB 
      ///////////////////////////
         /////////////////////                                    
             /////////////
```

## 1 - Identificando os Processos

Para listar os processos em execução pode-se usar o `top` ou `htop` (o segundo é mais visual).

Minha saída foi:

> top

```txt
top - 08:38:46 up 49 min,  1 user,  load average: 1,31, 1,38, 1,56
Tarefas: 300 total,   2 em exec., 298 dormindo,   0 parado,   0 zumbi
%Cpu(s):  2,2 us,  5,9 sy, 13,3 ni, 78,3 id,  0,3 wa,  0,0 hi,  0,0 si,  0,0 st
MB mem :   7824,3 total,    704,0 livre,   4061,2 usados,   3059,1 buff/cache
MB swap:   4095,5 total,   4085,7 livre,      9,8 usados,   2801,5 mem dispon.

    PID USUARIO   PR  NI    VIRT    RES    SHR S  %CPU  %MEM    TEMPO+ COMANDO                                                                                                                
   9782 user      25   5  560780 125836  77644 R  21,2   1,6   6:36.84 Discord                                                                                                                
  14464 user      25   5 1124,9g 165764 107800 S  15,6   2,1   2:55.48 chrome                                                                                                                 
   9832 user      25   5   72,6g 277308 112880 S  14,9   3,5   5:03.52 Discord                                                                                                                
   3051 user      25   5   32,7g 170912 106300 S  12,3   2,1   5:02.81 chrome                                                                                                                 
   2082 user      15  -5  759256 111144  60836 S  10,6   1,4   3:52.58 Xorg                                                                                                                   
   2240 user      15  -5 4156964 292092 109200 S   6,6   3,6   2:51.66 gnome-shell                                                                                                            
  18998 user      15  -5  636700  55056  41072 S   4,3   0,7   0:02.42 gnome-terminal-                                                                                                        
   2945 user      25   5   32,8g 337204 178996 S   1,7   4,2   1:39.94 chrome                                                                                                                 
   3055 user      25   5   32,4g 105672  71840 S   1,3   1,3   0:35.32 chrome                                                                                                                 
   2579 user      25   5 1716156  48088  32116 S   1,0   0,6   0:18.69 rustdesk                                                                                                               
   2633 user      25   5   12492   2344   1420 S   1,0   0,0   0:38.08 RustDesk.AppIma                                                                                                        
   2843 user      25   5 2779416  53140  34256 S   1,0   0,7   0:27.69 gjs                                                                                                                    
    951 root      25   5  332244  14660  12636 S   0,7   0,2   0:03.97 touchegg                                                                                                               
   2031 user       9 -11   45576  10620   5996 S   0,7   0,1   0:07.29 pipewire-pulse                                                                                                         
   4527 user      25   5 1124,9g 200844 105796 S   0,7   2,5   0:08.60 chrome                                                                                                                 
   9741 user      25   5   36,5g 140460  94112 S   0,7   1,8   0:13.11 Discord                                                                                                                
    711 root       0 -20       0      0      0 I   0,3   0,0   0:04.32 kworker/u9:2-i915_flip                                                                                                 
    956 root      25   5   16492   5624   4816 S   0,3   0,1   0:00.02 wpa_supplicant                                                                                                         
   1057 root      25   5  254388 144944  65504 S   0,3   1,8   0:09.01 execsnoop-bpfcc                                                                                                        
   1625 root      29   9  172688  10548   9104 S   0,3   0,1   0:00.89 cups-browsed                                                                                                           
   2030 user       9 -11  270744  16436  11128 S   0,3   0,2   0:01.30 wireplumber                                                                                                            
   2436 user      25   5  162816   7024   6336 S   0,3   0,1   0:00.58 at-spi2-registr                                                                                                        
   2453 user      25   5  325348  12516   7604 S   0,3   0,2   0:06.63 ibus-daemon                                                                                                            
   4328 user      25   5 1124,9g 213704  94804 S   0,3   2,7   0:11.63 chrome                                                                                                                 
   4382 user      25   5 1124,9g 179012  96444 S   0,3   2,2   0:06.29 chrome                                                                                                                 
  15364 root      20   0       0      0      0 I   0,3   0,0   0:01.39 kworker/1:3-events                                                                                                     
  19856 user      15  -5   23292   4460   3456 R   0,3   0,1   0:00.09 top                                                                                                                    
      1 root      20   0  168176  13404   8100 S   0,0   0,2   0:01.88 systemd                                                                                                                
      2 root      20   0       0      0      0 S   0,0   0,0   0:00.00 kthreadd                                                                                                               
      3 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 rcu_gp                                                                                                                 
      4 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 rcu_par_gp                                                                                                             
      5 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 netns                                                                                                                  
      7 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 kworker/0:0H-events_highpri                                                                                            
      9 root       0 -20       0      0      0 I   0,0   0,0   0:01.17 kworker/0:1H-events_highpri                                                                                            
     10 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 mm_percpu_wq                                                                                                           
     11 root      20   0       0      0      0 I   0,0   0,0   0:00.00 rcu_tasks_kthread                                                                                                      
     12 root      20   0       0      0      0 I   0,0   0,0   0:00.00 rcu_tasks_rude_kthread                                                                                                 
     13 root      20   0       0      0      0 I   0,0   0,0   0:00.00 rcu_tasks_trace_kthread                                                                                                
     14 root      20   0       0      0      0 S   0,0   0,0   0:00.35 ksoftirqd/0                                                                                                            
     15 root      20   0       0      0      0 I   0,0   0,0   0:03.85 rcu_preempt                                                                                                            
     16 root      rt   0       0      0      0 S   0,0   0,0   0:00.01 migration/0                                                                                                            
     17 root     -51   0       0      0      0 S   0,0   0,0   0:00.00 idle_inject/0
[...]
```



## 2 - Criando e executando aplicação em C

Foi criado um arquivo `main.c` com o conteúdo abaixo:

```c
#include <stdio.h>
int main ( ) {
    FILE *fd1, *fd2; // cria dois file descriptor
    printf("O programa cria dois arquivos\n");
    fd1 = fopen("teste1.txt", "w+"); // cria um arquivo teste1.txt
    fd2 = fopen("teste2.txt", "w+"); // cria um arquivo teste2.txt
    while(1) {} // cpu bound
return 0;
}
```

Em seguida foi compilado:

> gcc main.c -o main

Originando o executável `main`. Para executar permita que execute como programa, caso não seja o padrão do seu sistema:

> chmod +X main

E execute:

> ./main

Ou mantenha-o executando em segundo planho dando um detach no terminal. Pra isso basta adicionar um `&` ao final da linha de comando.

**Verificando execução**

Para verificar se o binário está sendo executado, abrimos outro terminal (ou no mesmo, se você deu o detach) e executamos novamente um `top`.
Obtive a seguinte saída:

```txt
top - 08:55:22 up  1:06,  1 user,  load average: 2,35, 1,83, 1,67
Tarefas: 330 total,   2 em exec., 328 dormindo,   0 parado,   0 zumbi
%Cpu(s): 26,3 us,  1,4 sy,  5,5 ni, 66,5 id,  0,3 wa,  0,0 hi,  0,1 si,  0,0 st
MB mem :   7824,3 total,    183,9 livre,   4860,1 usados,   2780,3 buff/cache
MB swap:   4095,5 total,   4071,2 livre,     24,2 usados,   1805,2 mem dispon.

    PID USUARIO   PR  NI    VIRT    RES    SHR S  %CPU  %MEM    TEMPO+ COMANDO                                                                                                                
  25060 user      15  -5    2772    948    856 R 100,0   0,0   3:09.48 main                 <--- AQUI NOSSO PROCESSO
   9782 user      25   5  561264 111644  63860 S   9,6   1,4   9:10.08 Discord                                                                                                                
   9832 user      25   5   72,6g 241108  75912 S   7,3   3,0   6:58.45 Discord                                                                                                                
  22697 user      25   5   29,3g 235260  99528 S   5,0   2,9   1:00.86 spotify                                                                                                                
   2082 user      15  -5  805100 109736  58972 S   4,6   1,4   5:06.45 Xorg                                                                                                                   
   2240 user      15  -5 4196352 280420  90056 S   2,6   3,5   3:41.15 gnome-shell                                                                                                            
  18998 user      15  -5  637928  50500  35668 S   1,7   0,6   0:07.42 gnome-terminal-                                                                                                        
[...]   
```

Como podemos ver acima, o processo está ocupando uma CPU completa (um núcleo).
O **PID** do nosso processo é o **25060**.


## 3 - Analizando os dados do processo no /proc

Mantenha o processo em execução, e acesse o *diretório fictício* `/proc/PID`, substituindo o PID pelo seu.

> cd /proc/25060 && ls

Minha saída:

```txt
arch_status  cgroup      coredump_filter     environ  gid_map   map_files  mounts      numa_maps      pagemap      root       setgroups     stat     task            uid_map
attr         clear_refs  cpu_resctrl_groups  exe      io        maps       mountstats  oom_adj        patch_state  sched      smaps         statm    timens_offsets  wchan
autogroup    cmdline     cpuset              fd       limits    mem        net         oom_score      personality  schedstat  smaps_rollup  status   timers
auxv         comm        cwd                 fdinfo   loginuid  mountinfo  ns          oom_score_adj  projid_map   sessionid  stack         syscall  timerslack_ns
```

Nesse diretório temos bastante coisa interessante para explorar.


## 4 - Analizando o Bloco descriptor de processo

> user@micro-02:/proc/25060$ cd fd && ls -la

Minha saída:

```txt
total 0
dr-x------ 2 user user  0 ago 17 09:06 .
dr-xr-xr-x 9 user user  0 ago 17 08:52 ..
lrwx------ 1 user user 64 ago 17 09:12 0 -> /dev/pts/0
lrwx------ 1 user user 64 ago 17 09:12 1 -> /dev/pts/0
lrwx------ 1 user user 64 ago 17 09:12 2 -> /dev/pts/0
lrwx------ 1 user user 64 ago 17 09:12 3 -> /home/user/Downloads/tarefa_temp/teste1.txt
lrwx------ 1 user user 64 ago 17 09:12 4 -> /home/user/Downloads/tarefa_temp/teste2.txt
```

## 5 - Respondendo a tarefa

**1 - Quais são os limites máximos do processo?**

> user@micro-02:/proc/25060$ cat limits

Saída:

```txt
Limit                     Soft Limit           Hard Limit           Units     
Max cpu time              unlimited            unlimited            seconds   
Max file size             unlimited            unlimited            bytes     
Max data size             unlimited            unlimited            bytes     
Max stack size            8388608              unlimited            bytes     
Max core file size        0                    unlimited            bytes     
Max resident set          unlimited            unlimited            bytes     
Max processes             30811                30811                processes 
Max open files            1024                 1048576              files     
Max locked memory         1025544192           1025544192           bytes     
Max address space         unlimited            unlimited            bytes     
Max file locks            unlimited            unlimited            locks     
Max pending signals       30811                30811                signals   
Max msgqueue size         819200               819200               bytes     
Max nice priority         0                    0                    
Max realtime priority     0                    0                    
Max realtime timeout      unlimited            unlimited            us
```

**2 - Analisando o arquivo maps, como identificar a seção de texto do processo em execução?**

> user@micro-02:/proc/25060$ cat maps

Saída:

```txt
5586edb21000-5586edb22000 r--p 00000000 08:01 3157246                    /home/user/Downloads/tarefa_temp/main
5586edb22000-5586edb23000 r-xp 00001000 08:01 3157246                    /home/user/Downloads/tarefa_temp/main
5586edb23000-5586edb24000 r--p 00002000 08:01 3157246                    /home/user/Downloads/tarefa_temp/main
5586edb24000-5586edb25000 r--p 00002000 08:01 3157246                    /home/user/Downloads/tarefa_temp/main
5586edb25000-5586edb26000 rw-p 00003000 08:01 3157246                    /home/user/Downloads/tarefa_temp/main
5586ee800000-5586ee821000 rw-p 00000000 00:00 0                          [heap]
7fcf25800000-7fcf25828000 r--p 00000000 08:01 4857060                    /usr/lib/x86_64-linux-gnu/libc.so.6
7fcf25828000-7fcf259bd000 r-xp 00028000 08:01 4857060                    /usr/lib/x86_64-linux-gnu/libc.so.6
7fcf259bd000-7fcf25a15000 r--p 001bd000 08:01 4857060                    /usr/lib/x86_64-linux-gnu/libc.so.6
7fcf25a15000-7fcf25a19000 r--p 00214000 08:01 4857060                    /usr/lib/x86_64-linux-gnu/libc.so.6
7fcf25a19000-7fcf25a1b000 rw-p 00218000 08:01 4857060                    /usr/lib/x86_64-linux-gnu/libc.so.6
7fcf25a1b000-7fcf25a28000 rw-p 00000000 00:00 0 
7fcf25bc5000-7fcf25bc8000 rw-p 00000000 00:00 0 
7fcf25be3000-7fcf25be5000 rw-p 00000000 00:00 0 
7fcf25be5000-7fcf25be7000 r--p 00000000 08:01 4854965                    /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
7fcf25be7000-7fcf25c11000 r-xp 00002000 08:01 4854965                    /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
7fcf25c11000-7fcf25c1c000 r--p 0002c000 08:01 4854965                    /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
7fcf25c1d000-7fcf25c1f000 r--p 00037000 08:01 4854965                    /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
7fcf25c1f000-7fcf25c21000 rw-p 00039000 08:01 4854965                    /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
7ffe5a91f000-7ffe5a940000 rw-p 00000000 00:00 0                          [stack]
7ffe5a972000-7ffe5a976000 r--p 00000000 00:00 0                          [vvar]
7ffe5a976000-7ffe5a978000 r-xp 00000000 00:00 0                          [vdso]
ffffffffff600000-ffffffffff601000 --xp 00000000 00:00 0                  [vsyscall]
```

*R: Não sei responder*


**3 - Quantas trocas de contexto foram realizadas até o momento da consulta?**

**4 - Qual é o id do processo pai? Quem é o processo pai?**

Vou responder as duas em uma, executando:

> user@micro-02:/proc/25060$ cat status

```txt
Name:	main
Umask:	0002
State:	R (running)
Tgid:	25060
Ngid:	0
Pid:	25060
PPid:	19024                               <-- PROCESSO PAI
TracerPid:	0
Uid:	1000	1000	1000	1000
Gid:	1000	1000	1000	1000
FDSize:	256
Groups:	4 27 121 133 1000 
NStgid:	25060
NSpid:	25060
NSpgid:	25060
NSsid:	19024
VmPeak:	    2772 kB
VmSize:	    2772 kB
VmLck:	       0 kB
VmPin:	       0 kB
VmHWM:	     948 kB
VmRSS:	     936 kB
RssAnon:	      92 kB
RssFile:	     844 kB
RssShmem:	       0 kB
VmData:	     224 kB
VmStk:	     132 kB
VmExe:	       4 kB
VmLib:	    1796 kB
VmPTE:	      44 kB
VmSwap:	       0 kB
HugetlbPages:	       0 kB
CoreDumping:	0
THP_enabled:	1
Threads:	1
SigQ:	1/30811
SigPnd:	0000000000000000
ShdPnd:	0000000000000000
SigBlk:	0000000000000000
SigIgn:	0000000000000000
SigCgt:	0000000000000000
CapInh:	0000000000000000
CapPrm:	0000000000000000
CapEff:	0000000000000000
CapBnd:	000001ffffffffff
CapAmb:	0000000000000000
NoNewPrivs:	0
Seccomp:	0
Seccomp_filters:	0
Speculation_Store_Bypass:	thread vulnerable
SpeculationIndirectBranch:	conditional enabled
Cpus_allowed:	f
Cpus_allowed_list:	0-3
Mems_allowed:	00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000000,00000001
Mems_allowed_list:	0
voluntary_ctxt_switches:	1
nonvoluntary_ctxt_switches:	75251
```

> user@micro-02:/proc/25060$ ps -f --pid 19024

```txt
UID          PID    PPID  C STIME TTY          TIME CMD
user       19024   18998  0 08:35 pts/0    00:00:00 bash
```

Portanto, o processo pai é o terminal (afinal, foi usando ele que executamos a aplicação)
