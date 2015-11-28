package models;

import play.db.jpa.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

/**
 * Created by Виктор on 05.11.2015.
 */
@Entity
public class Movie extends Model {

    public Long movieId;
    public String title;
    @Lob
    public String overview;

    @ManyToOne(fetch= FetchType.LAZY)
    public FavoriteList favoriteList;

    public Movie (FavoriteList favoriteList, Long movieId, String title, String overview) {
        this.favoriteList = favoriteList;
        this.movieId = movieId;
        this.title = title;
        this.overview = overview;
    }
}
