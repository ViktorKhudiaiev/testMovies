package models;

import play.db.jpa.Model;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import java.util.List;

/**
 * Created by Виктор on 05.11.2015.
 */
@Entity
public class FavoriteList extends Model {

    public String name;
    @OneToMany(mappedBy="favoriteList", cascade= CascadeType.ALL, fetch= FetchType.LAZY)
    public List<Movie> movie;



    public FavoriteList(String name, List<Movie> movie) {
        this.name = name;
        this.movie = movie;
    }
}
