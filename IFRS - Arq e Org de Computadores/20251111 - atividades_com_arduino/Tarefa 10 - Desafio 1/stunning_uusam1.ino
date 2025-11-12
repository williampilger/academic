int LED = 11;
int SENSOR = 2;

bool sensorState = false;

void setup() {
	pinMode(LED, OUTPUT);
	pinMode(SENSOR, INPUT);
  	digitalWrite(LED, LOW);
  
  	sensorState = digitalRead(SENSOR);
}


void loop () {
  
  if( digitalRead(SENSOR) ){
    if(!sensorState){
      sensorState = true;
      digitalWrite(LED, !digitalRead(LED));//inverte o led
    }//else, não faz nada
  } else sensorState = false;
  
  
}