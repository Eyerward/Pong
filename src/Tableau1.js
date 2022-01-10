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

        this.haut=this.add.tileSprite(0,0,this.largeur,20,'square').setOrigin(0,0);

        this.bas=this.add.tileSprite(0,this.hauteur-20,this.largeur,20,'square').setOrigin(0,0);


        this.balle = this.add.image(this.largeur/2,this.hauteur/2,'ball').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
    }

    update(){

    }
}
