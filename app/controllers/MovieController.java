package controllers;

import com.google.gson.GsonBuilder;
import models.FavoriteList;
import models.Movie;
import play.mvc.Controller;
import util.RelationExclusions;

/**
 * Created by Виктор on 08.11.2015.
 */
public class MovieController extends Controller {
    public static void movies() {
        render();
    }

    public static void saveMovie(Long listId, Long movieId, String title, String overview) {

        Movie movie = new Movie((FavoriteList)FavoriteList.findById(listId), movieId, title, overview);
        movie.save();
    }

    public static void movie(Long id) {
        Movie movie = Movie.findById(id);
        renderArgs.put("movie", movie);
        render();
    }
}
