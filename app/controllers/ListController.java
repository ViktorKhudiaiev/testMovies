package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import models.FavoriteList;
import play.mvc.Controller;
import util.RelationExclusions;

import java.util.List;

/**
 * Created by Виктор on 08.11.2015.
 */
public class ListController extends Controller {

    public static void lists() {
        render();
    }

    public static void saveList(String name) {
        FavoriteList favoriteList = new FavoriteList(name, null);
        favoriteList.save();
    }

    public static void getAllLists() {
        List<FavoriteList> lists = FavoriteList.findAll();
        renderJSON(new GsonBuilder().setExclusionStrategies(new RelationExclusions()).create().toJson(lists));
    }
}
