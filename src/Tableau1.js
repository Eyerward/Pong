/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        this.load.image('ball','assets/cercle.png')
        this.load.image('square','assets/carre.png')
    }

    create(){
        this.hauteur = 500
        this.largeur = 1000

        //Mur Haut
        this.haut=this.physics.add.image(0,0,'square').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        //Mur Bas
        this.bas=this.physics.add.image(0,this.hauteur-20,'square').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        //Balle
        this.balle = this.physics.add.image(this.largeur/2,this.hauteur/2,'ball').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1);
        this.balle.body.setVelocityX(Phaser.Math.Between(-200,200));
        this.balle.body.setVelocityY(Phaser.Math.Between(-200,200));
        this.balle.body.setMaxVelocity(1000,1000);

        //Raquette Gauche
        this.gauche=this.physics.add.image(10,this.hauteur/2,'square').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);
        this.gauche.body.setVelocityY(0);

        //Raquette Droite
        this.droite=this.physics.add.image(this.largeur-40,this.hauteur/2,'square').setOrigin(0,0);
        this.droite.setDisplaySize(20,100);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);
        this.droite.body.setVelocityY(0);

        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
        this.physics.add.collider(this.balle,this.gauche);
        this.physics.add.collider(this.balle,this.droite);

        /**this.gauche.speed=0;
        this.droite.speed=0;
        this.gauche.scrollFactorY=1;
        this.droite.scrollFactorY=1;*/

        this.initkeyboard()

    }

    initkeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.gauche.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.droite.body.setVelocityY(-500);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(500);
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(0);
                    break;
            }
        });
    }

    update(){
        if(this.balle.x > this.largeur){
            this.balle.x = 0
        }
        if(this.balle.x < 0){
            this.balle.x = this.largeur
        }
        if(this.balle.y < 0){
            this.balle.y = 0
        }
        if(this.balle.y > this.hauteur){
            this.balle.y = this.hauteur
        }
        /**this.gauche.scrollY=this.gauche.speed;
        this.droite.scrollY=this.droite.speed;*/
    }
}
