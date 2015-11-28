package util;

import com.google.gson.ExclusionStrategy;
import com.google.gson.FieldAttributes;

import javax.persistence.ManyToOne;

/**
 * Created by Виктор on 27.11.2015.
 */
public class RelationExclusions implements ExclusionStrategy {
    public boolean shouldSkipClass(Class<?> clazz) {
        return false;
    }

    public boolean shouldSkipField(FieldAttributes f) {
        return f.getAnnotation(ManyToOne.class) != null;
    }
}
