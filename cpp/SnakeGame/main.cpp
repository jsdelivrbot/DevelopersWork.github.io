#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
using namespace std;

#define KEY_UP 72 
#define KEY_DOWN 80
#define KEY_LEFT 75
#define KEY_RIGHT 77
#define ESCAPE 27

bool gameOver, printtail;

const int x = 40;
const int y = 40;

int foodx,foody,headx,heady;
int headx1,heady1,headx2,heady2;
int score;

int ntail;
int tailx[x-3],taily[x-3];

enum sdirection{ START = 0, LEFT , RIGHT , UP , DOWN};
sdirection snakedir;

void setup(){
	
	gameOver = false;
	
	snakedir = START;
	
	score = 0;
	
	headx = x/2;
	heady = y/2;
	
	foodx = rand() % x;
	foodx = x - foodx;
	foodx = rand() % foodx;
	foody = rand() % y;
	foody = y - foody;
	foody = rand() % foody;
	
}

void draw(){
	
	system("CLS");
	
	for(int i=0;i<x+3;i++)
		cout<<"=";
	cout<<endl;
	
	for(int j=0;j<x;j++){
		for(int i=0;i<y;i++){
			
		if(i==0 || i == y-1)
			cout<<"||";

		if(j==headx && i==heady)
			cout<<"?";
		else if(foodx == j && foody ==i)
			cout<<"O";
		else{
			printtail = false;
			for(int k=0;k<ntail;k++){
				if(tailx[k] == j && taily[k] == i){
					cout<<".";
					printtail = true;	
				}
					
			}
			if(!printtail)
				cout<<" ";	
		} 
		
		}
		cout<<endl;
	}
	
	for(int i=0;i<x+3;i++)
		cout<<"=";
	cout<<endl;
	
	cout<<endl<<"\t\tSCORE:"<<score<<endl;

}

void input(){
	
	if(_kbhit()){
		
		switch(_getch()){
			case KEY_UP:
				snakedir = UP;
				break;
			case KEY_DOWN:
				snakedir = DOWN;
				break;
			case  KEY_LEFT:
				snakedir = LEFT;
				break;
			case KEY_RIGHT:
				snakedir = RIGHT;
				break;
			case ESCAPE:
				gameOver = true;
				break;	
		}
	}
	
}

void update(){
	headx1 = tailx[0];
	heady1 = taily[0];
		
	tailx[0] = headx;
	taily[0] = heady;
	
	for(int i=1;i<ntail;i++){
		headx2 = tailx[i];
		heady2 = taily[i];
		tailx[i] = headx1;
		taily[i] = heady1;
		heady1 = heady2;
		headx1 = heady2;
	}
	
	switch(snakedir){
		case UP:
			--headx;
			break;
		case DOWN:
			++headx;
			break;
		case LEFT:
			--heady;
			break;
		case RIGHT:
			++heady;
			break;		
	}
	
	if(headx == foodx && foody == heady){
		score++;
		
		foodx = rand() % x;
		foodx = x - foodx;
		foodx = rand() % foodx;
		foody = rand() % y;
		foody = y - foody;
		foody = rand() % foody;
		
		ntail++;
	}
	
	if( (headx < 0 || heady < 0 ) || (headx > x  || heady > y) )
		gameOver = true;
		
	
}



int main(){
	cout<<"Hello\n";
	while(1){
		int option;
		cout<<"\n\nSelect the Option from Below\n\n\t1.START GAME\n\n\t2.QUIT\n\nEnter your Lucky CHOICE:";
		cin>>option;
		
		if(option==1){
				
			setup();
			
			while(!gameOver){
				
				draw();
				
				input();
				
				update();
				
				Sleep(10);
				
			}
			
			if(gameOver)
				cout<<endl<<endl<<"\t\tGAME OVER!"<<endl;
		}
		if(option==2)
			break;
		
	}
		
	return 0;
}
